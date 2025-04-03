import { getAssesments } from '@/actions/interview';
import StatsCards from './_components/statsCards';
import PerformanceChart from './_components/performanceChart';
import QuizList from './_components/quizList';

const InterviewPage = async () => {
  const assessments = await getAssesments();
  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-6xl font-bold gradient-title">Interview Preperation</h1>
      </div>
      <div className="space-y-6">
        <StatsCards assessments={assessments} />
        <PerformanceChart assessments={assessments} />
        <QuizList assessments={assessments} />
      </div>
    </div>
  )
}

export default InterviewPage;
