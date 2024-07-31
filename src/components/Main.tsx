import SwapForm from './SwapForm';

const Main: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background text-light p-4 md:p-8">
      {/* Active Liquidity Positions Section */}
      <div className="w-full max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Active Liquidity Positions</h2>
        <div className="border-t border-gray-500 my-8"></div> {/* Divider below title */}
        <div className="bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg overflow-x-auto">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-700 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                  Chain
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-700 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                  Assets
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-700 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-700 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                  APR
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-700 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                  Insights
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-700 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                  Locked Boost APR
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-700 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                  LP Chain
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-700 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-5 py-5 border-b border-gray-200 bg-gray-800 text-sm text-center" colSpan={8}>
                  No active positions
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex justify-center mt-4">
            <button className="header-button">New LP Position</button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-500 my-8 w-full max-w-5xl"></div> {/* Divider between sections */}

      {/* Past Liquidity Positions Section */}
      <div className="w-full max-w-5xl mt-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Past Liquidity Positions</h2>
        <div className="border-t border-gray-500 my-8"></div> {/* Divider below title */}
        <div className="bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg overflow-x-auto">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-700 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                  Chain
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-700 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                  Assets
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-700 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-700 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                  APR
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-700 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                  Insights
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-700 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                  Locked Boost APR
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-700 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                  LP Chain
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-700 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-5 py-5 border-b border-gray-200 bg-gray-800 text-sm text-center" colSpan={8}>
                  No past LP positions
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex justify-center mt-4">
            <button className="header-button">Review OmniSwap Analytics</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;