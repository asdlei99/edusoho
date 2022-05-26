<?php

namespace MarketingMallBundle\Event;

use Codeages\Biz\Framework\Event\Event;
use MarketingMallBundle\Biz\ProductMallGoodsRelation\Service\ProductMallGoodsRelationService;
use MarketingMallBundle\Common\GoodsContentBuilder\ClassroomInfoBuilder;

class ClassroomEventSubscriber extends BaseEventSubscriber
{
    public static function getSubscribedEvents()
    {
        return [
            'classroom.course.create' => 'onClassroomCourseCreate',
            'classroom.course.delete' => 'onClassroomCourseDelete',
            'classroom.course.update' => 'onClassroomCourseUpdate',
            'classroom.delete' => 'onClassroomProductDelete'
        ];
    }

    public function onClassroomCourseCreate(Event $event)
    {
        $classroom = $event->getSubject();
        $newCourseIds = $event->getArgument('newCourseIds');
        if ($newCourseIds) {
            $this->syncClassroomToMarketingMall($classroom['id']);
        }
    }

    public function onClassroomCourseDelete(Event $event)
    {
        $classroom = $event->getSubject();
        $this->syncClassroomToMarketingMall($classroom['id']);
    }

    public function onClassroomCourseUpdate(Event $event)
    {
        $classroom = $event->getSubject();
        $courseIds = $event->getArgument('courseIds');
        $existCourseIds = $event->getArgument('existCourseIds');
        if ($courseIds != $existCourseIds) {
            $this->syncClassroomToMarketingMall($classroom['id']);
        }
    }

    public function onClassroomProductDelete(Event $event)
    {
        $classroom = $event->getSubject();
        try {
            $this->deleteClassroomProductToMarketingMall($classroom['id']);
        } catch (\Exception $e) {
            throw $e;
        }
    }

    protected function syncClassroomToMarketingMall($classroomId)
    {
        $relation = $this->getProductMallGoodsRelationService()->getProductMallGoodsRelationByProductTypeAndProductId('classroom', $classroomId);
        if (empty($relation)) {
            return;
        }
        $this->updateGoodsContent('classroom', new ClassroomInfoBuilder(), $classroomId, $relation['goodsCode']);
    }

    protected function deleteClassroomProductToMarketingMall($classroomId)
    {
        $relation = $this->getProductMallGoodsRelationService()->getProductMallGoodsRelationByProductTypeAndProductId('classroom', $classroomId);
        if ($relation) {
            $this->getProductMallGoodsRelationService()->deleteProductMallGoodsRelation($relation['id']);
            try {
                $this->deleteMallGoods($relation['goodsCode']);
            } catch (\Exception $e) {
                throw $e;
            }
        }
    }

    /**
     * @return ProductMallGoodsRelationService
     */
    protected function getProductMallGoodsRelationService()
    {
        return $this->getBiz()->service('MarketingMallBundle:ProductMallGoodsRelation:ProductMallGoodsRelationService');
    }
}
