const Loading = () => {
  return (
    <div className="animate-pulse space-y-3">
      <div className="bg-slate-700 rounded-md aspect-video w-full"></div>
      <div className="h-2 bg-slate-700 rounded col-span-2"></div>
      <div className="h-2 bg-slate-700 rounded w-1/2"></div>
    </div>
  );
};

export default Loading;
