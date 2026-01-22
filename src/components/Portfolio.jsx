import React, { useState } from 'react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const scrollToSection = (section) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-serif italic">Kaaviya R</div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'Skills', 'About', 'Projects', 'Achievements'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`${
                    activeSection === item.toLowerCase()
                      ? 'text-purple-600'
                      : 'text-gray-700'
                  } hover:text-purple-600 transition-colors`}
                >
                  {item}
                </button>
              ))}
            </div>
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-purple-600 text-purple-600 px-6 py-2 rounded hover:bg-purple-600 hover:text-white transition-colors"
            >
              Contact Me
            </button>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-2">Hey, I'm Kaaviya Ramesh</p>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Full Stack Developer
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Passionate about creating innovative solutions with dedication and creativity.
              </p>
              <div className="flex gap-4 mb-8">
                <a href="mailto:kaaviyaramesh346@gmail.com" className="text-gray-600 hover:text-purple-600">
                  📧 kaaviyaramesh346@gmail.com
                </a>
              </div>
              <div className="flex gap-4 mb-8">
                <a href="https://github.com/Kaaviya346" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600">
                  GitHub
                </a>
                <a href="https://linkedin.com/in/kaaviya-r-5a0a65298" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600">
                  LinkedIn
                </a>
                <a href="https://www.hackerrank.com/profile/kaaviyaramesh346" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600">
                  HackerRank
                </a>
                <a href="https://leetcode.com/u/Kaaviya_Ramesh/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600">
                  LeetCode
                </a>
              </div>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-purple-600 text-white px-8 py-3 rounded hover:bg-purple-700 transition-colors"
              >
                Get in touch
              </button>
            </div>
            <div className="relative">
              <div className="bg-blue-100 rounded-full w-full aspect-square flex items-end justify-center overflow-hidden">
                <div className="w-4/5 h-4/5 bg-gray-300 rounded-t-full"></div>
              </div>
              <div className="absolute top-8 left-8 text-blue-400 text-4xl">✦</div>
              <div className="absolute top-16 right-12 text-purple-600 text-2xl">✦</div>
              <div className="absolute bottom-20 left-12 text-purple-400 text-3xl">✦</div>
              <div className="absolute bottom-32 right-8 text-purple-600 text-4xl">✦</div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-600 mb-2">My Skills</p>
          <h2 className="text-4xl font-bold mb-12">Technical Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Programming Languages',
                icon: '💻',
                description: 'Java, C, Python with strong fundamentals and practical application experience.'
              },
              {
                title: 'Web Development',
                icon: '🌐',
                description: 'HTML, CSS, JavaScript, Bootstrap, React for building modern, responsive web applications.'
              },
              {
                title: 'Database Management',
                icon: '🗄️',
                description: 'MySQL, Oracle, MS SQL Server with experience in JDBC and database connectivity.'
              },
              {
                title: 'AI & ML',
                icon: '🤖',
                description: 'Machine Learning, Deep Learning, and AI with hands-on project experience in deepfake detection.'
              }
            ].map((skill, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{skill.icon}</div>
                <h3 className="text-xl font-bold mb-3">{skill.title}</h3>
                <p className="text-gray-600">{skill.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6">Soft Skills</h3>
            <div className="flex flex-wrap gap-4">
              {['Problem Solving', 'Communication', 'Teamwork', 'Adaptability', 'Time Management'].map((skill, index) => (
                <span key={index} className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative z-10 bg-gray-300 rounded-lg overflow-hidden">
                <div className="w-full aspect-[3/4]"></div>
              </div>
              <div className="absolute inset-0 bg-purple-600 rounded-lg transform -rotate-3 -z-10"></div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">About Me</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                I'm Kaaviya Ramesh, an enthusiastic and dedicated Full Stack Developer currently pursuing B.Tech in Information Technology at Sri Manakula Vinayagar Engineering College with a CGPA of 8.86.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                I have a strong interest in Java, JDBC, databases, and web development. As a quick learner, I'm eager to explore new technologies and contribute to projects with dedication and creativity. I'm passionate about continuous learning and focused on delivering effective solutions that support organizational growth.
              </p>
              <div className="mt-6">
                <h3 className="text-xl font-bold mb-3">Education</h3>
                <div className="space-y-2">
                  <p className="text-gray-700">
                    <strong>B.Tech – Information Technology</strong><br />
                    Sri Manakula Vinayagar Engineering College<br />
                    CGPA: 8.86 | 2023 – 2027
                  </p>
                  <p className="text-gray-700">
                    <strong>Higher Secondary Education</strong><br />
                    Immaculate Heart of Mary Girls Higher Secondary School<br />
                    81.6% | 2022 – 2023
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-bold mb-3">Areas of Interest</h3>
                <div className="flex flex-wrap gap-3">
                  {['Artificial Intelligence', 'Machine Learning', 'Web Development'].map((area, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold">My Projects</h2>
            <a
              href="https://github.com/Kaaviya346"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-600 text-white px-6 py-3 rounded hover:bg-pink-700 transition-colors flex items-center gap-2"
            >
              <span>📂</span> Visit My GitHub
            </a>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Deepfake Detection System',
                description: 'A machine learning-based system designed to detect manipulated or AI-generated audio and video content by analyzing lip-audio synchronization to identify deepfake videos.',
                tech: 'Python, Machine Learning'
              },
              {
                title: 'JDBC-Based Banking System',
                description: 'A banking application that supports core operations such as account management and financial transactions, with secure database connectivity and reliable exception handling.',
                tech: 'Java, JDBC, SQL'
              }
            ].map((project, index) => (
              <div key={index} className="border-2 border-teal-600 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <p className="text-sm text-purple-600 font-semibold">Technologies: {project.tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Achievements & Certifications</h2>
          
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Achievements</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "1st Runner-Up",
                  description: 'National Level Symposium (Innovit\'25)',
                  image: '🥈'
                },
                {
                  title: 'Regional Prefinalist',
                  description: 'Youth Talk Competition',
                  image: '🏆'
                },
                {
                  title: 'NPTEL Java',
                  description: 'Top 1% in NPTEL Java Course',
                  image: '🌟'
                }
              ].map((achievement, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center text-6xl">
                    {achievement.image}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{achievement.title}</h3>
                    <p className="text-gray-600">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Certifications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'NPTEL Java – Elite + Gold',
                'NPTEL Python for Data Science – Distinction',
                'HackerRank Java',
                'Infosys Springboard – Front-End Development',
                'AWS-Cloud Foundations'
              ].map((cert, index) => (
                <div key={index} className="bg-white border-l-4 border-purple-600 p-4 rounded shadow-sm">
                  <p className="text-gray-800 font-semibold">{cert}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Internships</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  company: 'Twlight IT Solutions',
                  role: 'Web Development Internship'
                },
                {
                  company: 'Google AI/ML Pursuit',
                  role: 'Virtual Internship'
                },
                {
                  company: 'Future Technologies',
                  role: 'Web Development Internship'
                }
              ].map((internship, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg">
                  <h4 className="text-lg font-bold mb-2">{internship.company}</h4>
                  <p className="text-gray-700">{internship.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-gray-600 mb-2">Get In Touch</p>
            <h2 className="text-4xl font-bold">Contact Me</h2>
          </div>
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full border-2 border-purple-600 rounded px-4 py-2 focus:outline-none focus:border-purple-700"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full border-2 border-purple-600 rounded px-4 py-2 focus:outline-none focus:border-purple-700"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border-2 border-purple-600 rounded px-4 py-2 focus:outline-none focus:border-purple-700"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full border-2 border-purple-600 rounded px-4 py-2 focus:outline-none focus:border-purple-700"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="6"
                placeholder="Type your message..."
                className="w-full border-2 border-purple-600 rounded px-4 py-2 focus:outline-none focus:border-purple-700"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                onClick={handleSubmit}
                className="bg-purple-600 text-white px-12 py-3 rounded hover:bg-purple-700 transition-colors"
              >
                Submit
              </button>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-2">Or reach me directly at:</p>
            <p className="text-gray-800">📧 kaaviyaramesh346@gmail.com</p>
            <p className="text-gray-800">📱 +91 9342777166</p>
            <p className="text-gray-800">📍 Puducherry, India 605008</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p>© 2025 Kaaviya R. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="https://github.com/Kaaviya346" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">GitHub</a>
            <a href="https://linkedin.com/in/kaaviya-r-5a0a65298" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">LinkedIn</a>
            <a href="https://www.hackerrank.com/profile/kaaviyaramesh346" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">HackerRank</a>
            <a href="https://leetcode.com/u/Kaaviya_Ramesh/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">LeetCode</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;


