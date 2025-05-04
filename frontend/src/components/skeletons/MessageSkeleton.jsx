const MessageSkeleton = () => {
  const skeletonMessages = Array(6).fill(null);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-6">
      {skeletonMessages.map((_, idx) => (
        <div
          key={idx}
          className={`chat ${
            idx % 2 === 0 ? "chat-start" : "chat-end"
          } animate-pulse`}
        >
          <div className="chat-image avatar">
            <div className="w-10 h-10 rounded-full bg-base-300" />
          </div>

          <div className="chat-header mb-1">
            <div className="h-4 w-20 bg-base-300 rounded-md" />
          </div>

          <div className="chat-bubble bg-base-300 p-0">
            <div
              className="h-16 rounded-lg"
              style={{
                width: `${180 + (idx % 3) * 30}px`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageSkeleton;
