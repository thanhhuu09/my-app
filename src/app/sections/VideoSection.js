export default function VideoSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-16 bg-white">
      <div className="w-full max-w-4xl aspect-video bg-gray-200 rounded-3xl flex items-center justify-center relative shadow-md">
        {/* Play Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 bg-white bg-opacity-80 rounded-full flex items-center justify-center shadow-lg">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="20" fill="#2563eb" />
              <polygon points="16,13 28,20 16,27" fill="white" />
            </svg>
          </div>
        </div>
      </div>
      <div className="mt-6 text-lg font-semibold text-gray-700">
        Watch how it works
      </div>
    </section>
  );
}
