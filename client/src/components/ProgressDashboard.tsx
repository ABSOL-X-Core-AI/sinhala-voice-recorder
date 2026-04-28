import { useMemo } from 'react';
import { trpc } from '@/lib/trpc';
import { Loader2, TrendingUp, CheckCircle, Clock, BarChart3 } from 'lucide-react';

export default function ProgressDashboard() {
  const { data: stats, isLoading } = trpc.phoneme.getStats.useQuery();

  const progressPercentage = useMemo(() => {
    if (!stats?.recordingStats) return 0;
    const { total, approved, recorded } = stats.recordingStats;
    return total > 0 ? Math.round(((approved + recorded) / total) * 100) : 0;
  }, [stats]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-8">
        <Loader2 className="w-6 h-6 animate-spin text-indigo-500" />
      </div>
    );
  }

  if (!stats) return null;

  const { recordingStats, categoryStats } = stats;

  return (
    <div className="space-y-4">
      {/* Main Stats */}
      <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold text-gray-800 flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-indigo-500" />
            Overall Progress
          </h3>
          <span className="text-2xl font-bold text-indigo-600">{progressPercentage}%</span>
        </div>

        <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden mb-4">
          <div
            className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full rounded-full transition-all duration-700"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>

        <div className="grid grid-cols-4 gap-3">
          {[
            { label: 'Total', value: recordingStats.total, icon: <BarChart3 className="w-4 h-4" />, color: 'text-gray-700' },
            { label: 'Approved', value: recordingStats.approved, icon: <CheckCircle className="w-4 h-4" />, color: 'text-emerald-600' },
            { label: 'Recorded', value: recordingStats.recorded, icon: <TrendingUp className="w-4 h-4" />, color: 'text-amber-600' },
            { label: 'Pending', value: recordingStats.pending, icon: <Clock className="w-4 h-4" />, color: 'text-blue-600' },
          ].map((stat) => (
            <div key={stat.label} className="bg-gray-50 rounded-lg p-3 text-center">
              <div className={`flex items-center justify-center mb-1 ${stat.color}`}>{stat.icon}</div>
              <div className={`text-xl font-bold ${stat.color}`}>{stat.value}</div>
              <div className="text-[10px] text-gray-500 uppercase tracking-wider font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
        <h3 className="text-sm font-bold text-gray-800 mb-3">Category Breakdown</h3>
        <div className="space-y-2.5">
          {categoryStats.map((cat) => {
            const pct = cat.total > 0 ? Math.round((cat.recorded / cat.total) * 100) : 0;
            return (
              <div key={cat.category}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium capitalize text-gray-700">{cat.category}</span>
                  <span className="text-[10px] text-gray-500">{cat.recorded}/{cat.total} ({pct}%)</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-gradient-to-r from-indigo-400 to-purple-400 h-full rounded-full transition-all duration-500" style={{ width: `${pct}%` }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
