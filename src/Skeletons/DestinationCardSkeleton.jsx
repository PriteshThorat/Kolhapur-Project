import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const DestinationCardSkeleton = () => {
    return (
        <div className="group cursor-pointer w-full h-full">
            <div className="bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-xl border border-travel-blue-light dark:border-travel-purple-dark overflow-hidden animate-fade-in flex flex-col h-full">
                {/* Image */}
                <div className="relative">
                    <Skeleton height={220} />
                    <div className="absolute top-4 left-4">
                        <Skeleton width={80} height={28} borderRadius={16} />
                    </div>
                    <div className="absolute top-4 right-4">
                        <Skeleton width={60} height={28} borderRadius={16} />
                    </div>
                </div>
                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                    <Skeleton height={28} width={180} style={{ marginBottom: 8 }} />
                    <Skeleton count={2} height={16} style={{ marginBottom: 8 }} />
                    {/* Rating */}
                    <div className="flex items-center mb-4">
                        <Skeleton width={80} height={20} />
                        <Skeleton width={60} height={16} style={{ marginLeft: 8 }} />
                    </div>
                    {/* Details */}
                    <div className="flex justify-between items-center mb-4 text-sm">
                        <Skeleton width={60} height={16} />
                        <Skeleton width={60} height={16} />
                    </div>
                    {/* Highlights */}
                    <div className="mb-6">
                        <Skeleton width={100} height={16} style={{ marginBottom: 8 }} />
                        <div className="flex flex-wrap gap-2">
                            {Array.from({ length: 3 }).map((_, i) => (
                                <Skeleton key={i} width={70} height={20} borderRadius={12} />
                            ))}
                        </div>
                    </div>
                    {/* Book Now Button */}
                    <Skeleton height={48} width={"100%"} borderRadius={12} />
                </div>
            </div>
        </div>
    );
}

export default DestinationCardSkeleton;