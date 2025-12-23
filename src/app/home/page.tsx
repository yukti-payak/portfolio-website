import Link from 'next/link'

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          Hi, I'm <span className="text-blue-600">Your Name</span>
        </h1>
        <p className="text-xl md:text-2xl  mb-8" style={{color:"#EDEDED"}}>
          Full-Stack Developer | Building Digital Experiences
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/projects" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
            View Projects
          </Link>
          <Link href="/contact" 
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50">
            Contact Me
          </Link>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind', 'MongoDB', 'Git', 'AWS'].map((skill) => (
            <div key={skill} className="bg-gray-100 p-6 rounded-lg text-center hover:shadow-lg transition">
              <p className="font-semibold">{skill}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}