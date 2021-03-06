<?php

namespace Biz\Visualization\Job;

use Biz\Visualization\Service\ActivityDataDailyStatisticsService;
use Codeages\Biz\Framework\Scheduler\AbstractJob;

class StatisticsCoursePlanVideoDailyDataJob extends AbstractJob
{
    public function execute()
    {
        $startTime = strtotime('yesterday');
        $this->getActivityDataDailyStatisticsService()->statisticsCoursePlanVideoDailyData($startTime, $startTime + 86400);
    }

    /**
     * @return ActivityDataDailyStatisticsService
     */
    protected function getActivityDataDailyStatisticsService()
    {
        return $this->biz->service('Visualization:ActivityDataDailyStatisticsService');
    }
}
