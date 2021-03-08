<?php

namespace Biz\Classroom\Service;

use Biz\Classroom\DateTimeRange;

interface ReportService
{
    public function getStudentTrend($classroomId, DateTimeRange $timeRange);

    public function getStudentDetailList($classroomId, $filterConditions, $sort, $start, $limit);
}
