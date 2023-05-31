import Image from 'next/image'
import Navbar from './components/navbar'
import AppStoreButton from './components/appStoreButton'
import Footer from './components/footer'
import { motion } from 'framer-motion'


export default function Home() {
  return (
    <>
      <Navbar />

      <main className='mt-4 overflow-hidden'>
        <div className='relative bg-[#efecff] min-h-[600px] rounded-2xl grid place-content-center mx-2 md:mx-6 lg:mx-10 '>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mx-8 py-10 lg:py-4'>
            <div data-aos="zoom-in" >
              <span className='text-[#3a3a3a] text-sm md:text-base lg:text-lg pl-1'>Ahead app</span>
              <h1 className='text-4xl md:text-5xl lg:text-7xl font-bold text-start'>
                Master your life by mastering emotions
              </h1>
              <AppStoreButton />
            </div>
            <div className='flex items-center justify-center'>
              <Image data-aos="fade-left" className="block h-64 lg:h-96 w-auto" width={512} height={512} src="/images/appImage.png" alt="app" />
            </div>
          </div>
        </div>


        <div className='mx-2 md:mx-6 lg:mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-6 px-8 py-16 md:py-24 lg:py-48'>
          <h1 data-aos="fade-right" className='max-w-[260px] text-2xl sm:text-3xl lg:text-4xl font-bold text-start mb-2 lg:mb-0 lg:mr-2 col-span-1 md:col-span-2 lg:col-span-1'>
            EQ beats IQ
          </h1>
          <p className='text-sm lg:text-xl text-[#666568] font-semibold py-2' data-aos="fade-left" data-aos-delay={200} >
            People with high emotional intelligence (EQ) live more fulfilled lives. They tend to be happier and have healthier relationships.
          </p>
          <p className='text-sm lg:text-xl text-[#666568] font-semibold py-2' data-aos="fade-left" data-aos-delay={400} >
            They are more successful in their pursuits and make for inspiring leaders. According to science, they earn $29k a year.
          </p>
        </div>

        <div className='mx-2 md:mx-6 lg:mx-10 flex items-center my-auto'>
          <h1 data-aos="fade-right" className='text-3xl w-fit sm:text-4xl lg:text-5xl font-bold text-start mr-2'>
            Does this sound familiar?
          </h1>
          <Image data-aos="zoom-in" data-aos-delay={200} className="block -rotate-12 h-16 lg:h-20 w-auto" width={128} height={128} src="/images/playerPink.png" alt="player" />
        </div>
        <div className='overflow-auto scrollbar-hide mb-36' data-aos="fade-up">
          <div className='relative -px-32 flex items-center justify-around w-full gap-x-16 py-8'>
            <motion.div
              className='flex items-center justify-center w-[300px] h-full min-w-[300px] max-w-[300px]'
              animate={{ rotate: [0, 10, 0] }}
              transition={{
                duration: 3,
                ease: "linear"
              }}
              whileHover={{ rotate: 0 }}
            >
              <div className='flex items-center justify-center w-[300px] h-full min-w-[300px] max-w-[300px]'>
                <div className='bg-[#d9f2ff] px-4 py-6 rounded-xl w-full grow h-full'>
                  <h1 className='text-3xl lg:text-4xl font-bold text-start mb-4'>
                    😃
                  </h1>
                  <h2 className='text-sm lg:text-xl font-bold'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </h2>
                  <p className='text-xs lg:text-sm text-[#7c7a88] mt-1'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet dictum ultrices, nunc nisl ultricies nunc, quis ultricies nisl nunc sit amet nisl. Sed euismod, diam sit amet dictum ultrices, nunc nisl ultricies nunc, quis ultricies nisl nunc sit amet nisl.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className='flex items-center justify-center w-[300px] h-full min-w-[300px] max-w-[300px]'
              animate={{ rotate: [0, 10, 0] }}
              transition={{
                duration: 4,
                ease: "linear"
              }}
              whileHover={{ rotate: 0 }}
            >
              <div className='flex items-center justify-center w-[300px] h-full min-w-[300px] max-w-[300px]'>
                <div className='bg-[#efecff] rotate-6 px-4 py-6 rounded-xl w-full h-full'>
                  <h1 className='text-3xl lg:text-4xl font-bold text-start mb-4'>
                    😂
                  </h1>
                  <h2 className='text-sm lg:text-xl font-bold'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </h2>
                  <p className='text-xs lg:text-sm text-[#7c7a88] mt-1'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet dictum ultrices, nunc nisl ultricies nunc, quis ultricies nisl nunc sit amet nisl. Sed euismod, diam sit amet dictum ultrices, nunc nisl ultricies nunc, quis ultricies nisl nunc sit amet nisl.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className='flex items-center justify-center w-[300px] h-full min-w-[300px] max-w-[300px]'
              animate={{ rotate: [0, -10, 0] }}
              transition={{
                duration: 1,
                ease: "linear"
              }}
              whileHover={{ rotate: -10 }}
            >
              <div className='flex items-center justify-center w-[300px] h-full min-w-[300px] max-w-[300px]'>
                <div className='bg-[#6441ef] -rotate-6 px-4 py-6 rounded-xl w-full h-full'>
                  <h1 className='text-3xl lg:text-4xl font-bold text-start mb-4'>
                    😋
                  </h1>
                  <h2 className='text-sm lg:text-xl font-bold text-white'>
                    Lorem ipsum dolor sit amet.
                  </h2>
                  <p className='text-xs lg:text-sm text-gray-300 mt-1'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet dictum ultrices, nunc nisl ultricies nunc, quis ultricies nisl nunc sit amet nisl. Sed euismod, diam sit amet dictum ultrices, nunc nisl ultricies nunc, quis ultricies nisl nunc sit amet nisl.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className='flex items-center justify-center w-[300px] h-full min-w-[300px] max-w-[300px]'
              animate={{ rotate: [0, 30, 0] }}
              transition={{
                duration: 5,
                ease: "linear"
              }}
              whileHover={{ rotate: 10 }}
            >
              <div className='flex items-center justify-center w-[300px] h-full min-w-[300px] max-w-[300px]'>
                <div className='bg-[#ffefd5] px-4 py-6 rounded-xl w-full h-full'>
                  <h1 className='text-3xl lg:text-4xl font-bold text-start mb-4'>
                    😤
                  </h1>
                  <h2 className='text-sm lg:text-xl font-bold'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </h2>
                  <p className='text-xs lg:text-sm text-[#7c7a88] mt-1'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet dictum ultrices, nunc nisl ultricies nunc, quis ultricies nisl nunc sit amet nisl. Sed euismod, diam sit amet dictum ultrices, nunc nisl ultricies nunc, quis ultricies nisl nunc sit amet nisl.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className='mx-2 md:mx-6 lg:mx-10 relative bg-[#fef6f0] min-h-[600px] rounded-2xl grid place-content-center'
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 items-center mx-4 lg:mx-8 py-10 lg:py-4'>
            <div className='flex flex-col items-start lg:items-center'>
              <div>
                <span className='text-[#3a3a3a] text-sm md:text-base lg:text-lg pl-1'>Built out of frustration</span>
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-start'>
                  Meet the ahead app
                </h1>
              </div>
              <Image data-aos="zoom-in" className="block my-6 h-36 lg:h-40 w-auto" width={128} height={128} src="/images/playerPink.png" alt="playerPink" />
            </div>
            <div className='flex flex-col gap-y-4 w-3/4'>
              <p className='text-sm md:text-base lg:text-lg text-[#7c7a88]'>
                A personalized pocket coach that provides bite- sized, science-driven tools to boost emotional intelligence.
              </p>
              <p className='text-start text-sm md:text-base lg:text-lg text-[#7c7a88]'>
                Think of it as a pocket cheerleader towards a better, more fulfilling.
              </p>
            </div>
          </div>
        </motion.div>

        <div className='mx-4 md:mx-8 lg:mx-16 py-20'>
          <span data-aos="fade-up" className='text-[#3a3a3a] text-sm md:text-base lg:text-lg'>
            Wrong with self-improvement & how we're fixing it.
          </span>
          <div data-aos="fade-left" className='flex items-center -mt-4'>
            <h1 className='text-3xl w-fit sm:text-4xl lg:text-5xl font-bold text-start mr-2'>
              Self-improvement. Ugh.
            </h1>
            <Image data-aos="zoom-in" data-aos-delay={200} className="block -rotate-12 h-16 lg:h-20 w-auto" width={128} height={128} src="/images/playerBeige.png" alt="playerBeige" />
          </div>
          <div className='flex flex-col mx-4 md:mx-16 lg:mx-32 gap-y-8 mt-8'>
            <div data-aos="fade-left" data-aos-delay={100} className='flex flex-col gap-y-2'>
              <h2 className='text-sm md:text-base lg:text-lg font-bold text-start'>
                It's not as easy as 1-2-3.
              </h2>
              <p className='text-sm md:text-base lg:text-lg text-[#7c7a88] font-semibold'>
                The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else).
              </p>
            </div>
            <div data-aos="fade-right" data-aos-delay={200} className='flex flex-col gap-y-2'>
              <h2 className='text-sm md:text-base lg:text-lg font-bold text-start'>
                It's not as easy as 1-2-3.
              </h2>
              <p className='text-sm md:text-base lg:text-lg text-[#7c7a88] font-semibold'>
                The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else).
              </p>
            </div>
            <div data-aos="fade-left" data-aos-delay={300} className='flex flex-col gap-y-2'>
              <h2 className='text-sm md:text-base lg:text-lg font-bold text-start'>
                It's not as easy as 1-2-3.
              </h2>
              <p className='text-sm md:text-base lg:text-lg text-[#7c7a88] font-semibold'>
                The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else).
              </p>
            </div>
            <div data-aos="fade-right" data-aos-delay={400} className='flex flex-col gap-y-2'>
              <h2 className='text-sm md:text-base lg:text-lg font-bold text-start'>
                It's not as easy as 1-2-3.
              </h2>
              <p className='text-sm md:text-base lg:text-lg text-[#7c7a88] font-semibold'>
                The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else).
              </p>
            </div>
            <div data-aos="fade-left" data-aos-delay={500} className='flex flex-col gap-y-2'>
              <h2 className='text-sm md:text-base lg:text-lg font-bold text-start'>
                It's not as easy as 1-2-3.
              </h2>
              <p className='text-sm md:text-base lg:text-lg text-[#7c7a88] font-semibold'>
                The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else).
              </p>
            </div>
          </div>
        </div>

        <div className='mx-2 md:mx-6 lg:mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-6 px-8 py-48 md:py-64 lg:py-72'>
          <h1 data-aos="fade-right" className='max-w-[260px] text-2xl sm:text-3xl lg:text-4xl font-bold text-start mb-4 lg:mb-0 lg:mr-2 col-span-1 md:col-span-2 lg:col-span-1'>
            Be the best you with EQ
          </h1>
          <p className='text-sm lg:text-xl text-[#666568] font-semibold py-2' data-aos="fade-left" data-aos-delay={200}>
            Not having your own emotions under control might be holding you back.
          </p>
          <p className='text-sm lg:text-xl text-[#666568] font-semibold py-2' data-aos="fade-left" data-aos-delay={400}>
            Additionally, not understanding those of others stops you from being parent, friend you can be.
          </p>
        </div>

        <div
          className='mx-2 md:mx-6 lg:mx-10 relative bg-[#eef8fe] min-h-[600px] rounded-2xl grid place-content-center'
          data-aos="fade-up"
        >
          <div className='flex flex-col mx-4 lg:mx-8 py-10 lg:py-16'>
            <span className='text-[#3a3a3a] text-sm md:text-base lg:text-lg pl-1 text-center'>
              Let your friends, family, and co-workers (anonymously) rate your social skills.
            </span>
            <h1
              className='text-3xl md:text-4xl lg:text-5xl font-bold text-center'
              data-aos="fade-up"
            >
              Ever wondered what others think of you?
            </h1>
            <motion.div
              transition={{ duration: 0.5 }}
              animate={{ scale: [1, 1.2, 1] }}
              data-aos="fade-up"
              className='relative grid grid-cols-1 sm:grid-cols-3 gap-4 mt-20 mb-4 mx-4'>
              <div
                className='absolute border-l-4 sm:border-l-0 w-2 h-4/6 sm:h-0 sm:rotate-0 sm:w-4/6 left-6 top-[50%] translate-y-[-50%] sm:translate-y-0 sm:top-12 sm:left-[50%] sm:translate-x-[-50%] sm:border-b-4 border-dashed border-[#bbcbcc]'>
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay={200}
                className='z-10 flex items-center sm:flex-col gap-2 col-span-1'>
                <div className='flex items-center justify-center relative shrink-0'>
                  <Image className="block my-6 h-12 lg:h-16 w-12 lg:w-16" width={128} height={128} src="/images/spinner.png" alt="spinner" />
                  <span className='absolute text-[#bbcbcc] text-xl lg:text-2xl text-center'>
                    1
                  </span>
                </div>
                <p data-aos="fade-up" className='text-start sm:text-center text-sm font-semibold'>
                  Answer questions on your social skills
                </p>
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay={400}
                className='z-10 flex items-center sm:flex-col gap-2 col-span-1'>
                <div className='flex items-center justify-center relative shrink-0'>
                  <Image className="block my-6 h-12 lg:h-16 w-12 lg:w-16" width={128} height={128} src="/images/spinner.png" alt="spinner" />
                  <span className='absolute text-[#bbcbcc] text-xl lg:text-2xl text-center'>
                    2
                  </span>
                </div>
                <p data-aos="fade-right" className='text-start sm:text-center text-sm font-semibold'>
                  Let others anonymously answer the same questions about you
                </p>
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay={600}
                className='z-10 flex items-center sm:flex-col gap-2 col-span-1'>
                <div className='flex items-center justify-center relative shrink-0'>
                  <Image className="block my-6 h-12 lg:h-16 w-12 lg:w-16" width={128} height={128} src="/images/spinner.png" alt="spinner" />
                  <span className='absolute text-[#bbcbcc] text-xl lg:text-2xl text-center'>
                    3
                  </span>
                </div>
                <p data-aos="fade-left" className='text-start sm:text-center text-sm font-semibold'>
                  Find out where you and others see things the same way - and where not!
                </p>
              </div>
            </motion.div>
            <div className='relative grid grid-cols-1 items-center md:grid-cols-4 h-[400px] md:h-[200px] gap-4 mt-10 mb-10 shadow-xl bg-white md:mx-20 rounded-2xl p-2 md:p-4'>
              <div className='absolute border-l-4 md:border-l-0 w-2 h-[80%] md:h-0 md:w-9/12 left-[50.2%] md:left-[50%] top-[50%] translate-y-[-50%] md:translate-y-0 md:top-24 translate-x-[-50%] md:border-b-4 border-[#bbcbcc]'></div>
              <div className='relative z-10 flex items-center flex-col gap-2 col-span-1'>
                <div className='bg-blue-500 w-6 h-6 rounded-full'></div>
                <p
                  data-aos="fade-up"
                  className='absolute top-2 left-[54%] md:-top-10 md:left-16 text-center text-white text-xs bg-blue-500 rounded-xl px-4 py-2'>
                  You
                </p>
              </div>
              <div className='relative z-10 flex items-center flex-col gap-2 col-span-1'>
                <div className='bg-yellow-400 w-6 h-6 rounded-full'></div>
                <p
                  data-aos="fade-left"
                  className='absolute w-fit top-2 right-[54%] md:top-8 md:-left-0 text-center text-white text-xs bg-yellow-400 rounded-xl px-4 py-2'>
                  Anonymonos 1
                </p>
              </div>
              <div className='relative z-10 flex items-center flex-col gap-2 col-span-1'>
                <div className='bg-pink-400 w-6 h-6 rounded-full'></div>
                <p
                  data-aos="fade-right"
                  className='absolute w-fit top-2 left-[54%] md:-top-12 md:left-20 text-center text-white text-xs bg-pink-400 rounded-xl px-4 py-2'>
                  Anonymonos 2
                </p>
              </div>
              <div className='relative z-10 flex items-center flex-col gap-2 col-span-1'>
                <div className='bg-green-400 w-6 h-6 rounded-full'></div>
                <p
                  data-aos="fade-up"
                  className='absolute w-fit top-2 right-[54%] md:top-8 md:left-20 text-center text-white text-xs bg-green-400 rounded-xl px-4 py-2'>
                  Anonymonos 3
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='mx-2 md:mx-6 lg:mx-10 min-h-screen grid place-content-center'>
          <div className='flex flex-col items-center justify-center gap-2'>
            <span className='text-[#3a3a3a] text-sm md:text-base'>
              We take privacy seriously
            </span>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center'>
              Before you get started
            </h1>
            <p className='text-center text-base md:text-lg lg:text-xl mt-4'>
              "We won't share your answers with anyone (and won't ever tell you which friends said what about you)"
              <br></br>
              with love,
              <span className='text-[#3a3a3a] text-sm md:text-base lg:text-lg pl-1'>
                Team akuod
              </span>
            </p>
            <button className='bg-black text-white text-sm md:text-base lg:text-lg rounded-[24px] px-6 py-3'>
              Start a test
            </button>
            <span className='text-[#3a3a3a] text-xs md:text-sm'>
              Take only 5 minutes
            </span>
          </div>
        </div>

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          className='mx-2 md:mx-6 lg:mx-10 relative bg-[#f3f1ff] min-h-[600px] rounded-2xl grid place-content-center'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mx-4 lg:mx-8 py-10 lg:py-16'>
            <div>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-start'>
                Work with us
              </h1>
              <div data-aos="fade-up" className='bg-white px-8 py-6 rounded-2xl mt-4 pb-10'>
                <Image className="block h-10 lg:h-16 rounded-full w-fit" width={128} height={128} src="/images/playerBlueFace.png" alt="playerBlueFace" />
                <h2 className='mt-2 text-sm md:text-base lg:text-xl font-bold text-start'>
                  About
                </h2>
                <p className='text-xs md:text-sm lg:text-base text-start mt-2'>
                  At ahead our goal is to make self- improvement fun and lasting. We know there's a way how to make it work. And that's what aHead is all about!
                </p>
              </div>
              <div data-aos="fade-up" data-aos-delay={200} className='bg-[#fef6f0] px-8 py-6 rounded-2xl -mt-6'>
                <h2 className='mt-2 text-sm md:text-base lg:text-xl font-bold text-start'>
                  Product
                </h2>
                <p className='text-xs md:text-sm lg:text-base text-start mt-2'>
                  Sure, you could spend ages reading books or sitting in seminars on how to become a better spouse, parent, or manager - like we did...
                </p>
              </div>
            </div>
            <div>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-end mr-12 text-[#80be1f]'>
                ahead
              </h1>
              <div className='grid grid-flow-row items-center justify-center overflow-y-auto px-2 sm:px-10 gap-y-4 max-h-[500px] py-4'>
                <div className='flex flex-col p-2 sm:p-6 items-center justify-center gap-4 bg-white rounded-xl'>
                  <h1 className='text-sm md:text-base lg:text-xl font-bold text-start'>
                    Power through, even when the going gets tough
                  </h1>
                  <p className='text-start text-base md:text-lg lg:text-xl'>
                    We help you spot and work around whatever stands in the way, be it bad habits, fears, etc.
                  </p>
                </div>
                <div className='flex flex-col p-6 items-center justify-center gap-4 bg-white rounded-xl'>
                  <h1 className='text-sm md:text-base lg:text-xl font-bold text-start'>
                    Power through, even when the going gets tough
                  </h1>
                  <p className='text-start text-base md:text-lg lg:text-xl'>
                    We help you spot and work around whatever stands in the way, be it bad habits, fears, etc.
                  </p>
                </div>
                <div className='flex flex-col p-6 items-center justify-center gap-4 bg-white rounded-xl'>
                  <h1 className='text-sm md:text-base lg:text-xl font-bold text-start'>
                    Power through, even when the going gets tough
                  </h1>
                  <p className='text-start text-base md:text-lg lg:text-xl'>
                    We help you spot and work around whatever stands in the way, be it bad habits, fears, etc.
                  </p>
                </div>
                <div className='flex flex-col p-6 items-center justify-center gap-4 bg-white rounded-xl'>
                  <h1 className='text-sm md:text-base lg:text-xl font-bold text-start'>
                    Power through, even when the going gets tough
                  </h1>
                  <p className='text-start text-base md:text-lg lg:text-xl'>
                    We help you spot and work around whatever stands in the way, be it bad habits, fears, etc.
                  </p>
                </div>
                <div className='flex flex-col p-6 items-center justify-center gap-4 bg-white rounded-xl'>
                  <h1 className='text-sm md:text-base lg:text-xl font-bold text-start'>
                    Power through, even when the going gets tough
                  </h1>
                  <p className='text-start text-base md:text-lg lg:text-xl'>
                    We help you spot and work around whatever stands in the way, be it bad habits, fears, etc.
                  </p>
                </div>
                <div className='flex flex-col p-6 items-center justify-center gap-4 bg-white rounded-xl'>
                  <h1 className='text-sm md:text-base lg:text-xl font-bold text-start'>
                    Power through, even when the going gets tough
                  </h1>
                  <p className='text-start text-base md:text-lg lg:text-xl'>
                    We help you spot and work around whatever stands in the way, be it bad habits, fears, etc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className='mx-2 md:mx-6 lg:mx-10 px-8 py-16 md:py-24 lg:py-48'>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-start mb-2 lg:mb-0 lg:mr-2 col-span-1 md:col-span-2 lg:col-span-1'>
            Open vacancies
          </h1>
          <div className='grid grid-flow-row sm:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4 mt-6'>
            <div data-aos="fade-right" className='bg-[#fefbec] p-4 rounded-xl flex flex-col'>
              <h2 className='text-sm md:text-base lg:text-xl font-semibold text-start'>
                Senior Full-Stack Engineer
              </h2>
              <ul className='list-disc list-inside mt-2'>
                <li>
                  Full-time position
                </li>
                <li>
                  Berlin or remote
                </li>
                <li>
                  €65-85k, 0.5-1.50% equity share options
                </li>
              </ul>
            </div>
            <div data-aos="fade-up" className='bg-[#fefbec] p-4 rounded-xl flex flex-col'>
              <h2 className='text-sm md:text-base lg:text-xl font-semibold text-start'>
                Senior Designer
              </h2>
              <ul className='list-disc list-inside mt-2'>
                <li>
                  Full-time position
                </li>
                <li>
                  Berlin or remote
                </li>
                <li>
                  €40-55k, 0.25-0.50% equity share options
                </li>
              </ul>
            </div>
            <div data-aos="fade-left" className='bg-[#fefbec] p-4 rounded-xl flex flex-col'>
              <h2 className='text-sm md:text-base lg:text-xl font-semibold text-start'>
                Superstar Intern
              </h2>
              <ul className='list-disc list-inside mt-2'>
                <li>
                  Full-time position
                </li>
                <li>
                  Berlin or remote
                </li>
                <li>
                  €20-24k, 0.5-1.50% equity share options
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main >

      <Footer />
    </>
  )
}