import Image from 'next/image'

const Home = () => {
  return (
    <main>
      <div className="container mx-auto">
        <div className="p-8 md:p-12">
          <h2 className="leading-7 md:text-3xl md:leading-10">
            Hi! I'm a{' '}
            <span className="px-2 bg-yellow-100">Front End Developer</span>{' '}
            based in El Salvador, I've been working in the web for more that 6
            years and have experience with React, Vue, Ruby on Rails, WordPress
            and a bunch of libraries around them.
          </h2>
        </div>

        <div className="p-8">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-green-50">
              <h3 className="text-xl">
                Current status: <br />
                <a
                  href="https://www.linkedin.com/in/samuelbran/"
                  target="_blank"
                  className="font-bold underline hover:text-indigo-500"
                >
                  Looking to join a new team.
                </a>
              </h3>
            </div>
            <div className="flex flex-wrap content-center p-4 bg-blue-50">
              <p>Today learning: Tailwind CSS</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50">
        <div className="container p-8 mx-auto md:p-12">
          <h3 className="text-xl">Tools I use everyday:</h3>
          <br />
          <ul className="pl-4 list-disc">
            <li>Alacritty</li>
            <li>Neovim</li>
            <li>Git</li>
            <li>Figma</li>
            <li>Notion</li>
          </ul>
        </div>
      </div>

      <div className="container p-8 mx-auto md:p-12">
        <h3 className="text-xl">Things I like to do on my free time:</h3>
        <br />
        <ul className="pl-3 list-disc">
          <li>
            Hiking - I'm an active member of{' '}
            <a
              target="_blank"
              className="underline hover:text-gray-500"
              href="https://www.facebook.com/FSME.SV"
            >
              FSME
            </a>
            .
          </li>
          <li>Gaming - Extremely competitive.</li>
          <li>
            Reading - Non-fiction only, I love how books teach me different
            forms of thought.
          </li>
          <li>Tweak my installation of Manjaro Linux (i3 is awesome!)</li>
        </ul>
      </div>

      <div className="text-white bg-black">
        <div className="container p-8 mx-auto text-center md:p-12">
          <h2 className="text-3xl mb-3">Think I can fit your team?</h2>
          <h3 className="text-xl">Please contact me:</h3>
          <br />
          <img className="inline-block" src="/mail.png" width="350" />
        </div>
      </div>
    </main>
  )
}

export default Home
