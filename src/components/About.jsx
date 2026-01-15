  const aboutItems = [
  {
    label: 'Project done',
    number: 45
  },
  {
    label: 'Years of experience',
    number: 10
  }
];

function About() {

  
    return (
        <section className="section" id="about">
            <div className="container">
                <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
                    <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                        Welcome! I&apos;m Henry, a professional web developer with a knack for crafting visually stunning and highly functional websites. Combining creativity and technical expertise. I transform your vision into digital masterpiece that excels in both appearance and performance.
                    </p>
                    <div className="">
                        {
                            aboutItems.map(({label, number}, key) => (
                                <div className="" key={key}>
                                    <div className="">
                                        <span className=""> {number} </span>
                                        <span className="">+</span>
                                    </div>

                                    <p className=""> {label} </p>

                                </div>
                            ))
                        }

                        <img src="/images/logo.svg" alt="Logo" width={30} height={30} className="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;