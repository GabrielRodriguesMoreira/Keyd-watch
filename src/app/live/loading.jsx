export default function Loading() {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 z-50">
            <div className="w-16 h-16 border-t-4 border-purple-500 rounded-full animate-spin"></div>
        </div>
    );
}
