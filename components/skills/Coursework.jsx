const Coursework = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Coursework & Tools</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i className='bx bxl-python' ></i>

                    <div>
                        <h3 className="skills__name">Python</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className='bx bxl-c-plus-plus' ></i>

                    <div>
                        <h3 className="skills__name">C++</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className='bx bxl-java' ></i>

                    <div>
                        <h3 className="skills__name">Java</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
            </div>

            <div className="skills__group">

                <div className="skills__data">
                    <i className='bx bxl-gitlab' ></i>

                    <div>
                        <h3 className="skills__name">GitLab</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className='bx bxl-visual-studio' ></i>

                    <div>
                        <h3 className="skills__name">VS Code</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className='bx bxl-github' ></i>

                    <div>
                        <h3 className="skills__name">GitHub</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Coursework