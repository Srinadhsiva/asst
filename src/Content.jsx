import './Content.css'


const Content = () => { 
    const component = [1,2,3,4,5,6,7,8].map((val,index) => {
            return (            
              <div className="item" key={index}>
                  <img src={`https://raw.githubusercontent.com/Srinadhsiva/asst/refs/heads/main/public/${val}.jpg`} alt={'thumbnail'} />
                  <p>{'Comic-Name'}</p>
                <a href={`/`}>Chapter-1</a><br/>
              </div>
            )
    })
    return (
    <section className='content-section'>
        <div className="grid-container">
            {component}
        </div>
    </section>
        );
    
    }

  
export default Content  