import Image from "next/image";

export default function Project2Page() {
  return (
    <div className="min-h-screen bg-background px-6 py-12">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-extrabold mb-4">🚀 Project 2</h1>
          <p className="text-muted">
            This project has less content and focuses more on visuals.
          </p>
        </div>
        <div>
          {/* <Image
            src="/projects/project-2/preview.png"
            alt="Project 2 Preview"
            className="rounded-xl shadow-lg"
          /> */}
        </div>
      </div>
    </div>
  );
}
