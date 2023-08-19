function EventsEx() {
    const [pageX ,setPageX] = useState(0);
    const [pageY ,setPageY] = useState(0);

    return (
      <div onMouseMove={(e) =>{

        console.log(e.pageX, e.pageY)
        setPageX(e.pageX);
        setPageY(e.pageY);

      }} 
      
      style={{
        width : '100vw',
        height : '100vh',
        backgroundColor: 'yellow'
      }}>
          <div style={{
            width : '200px',
            height : '200px',
            position : 'sticky',
            top : `${pageY - 90}px`,
            left : `${pageX - 90}px`,
            backgroundColor: 'red',
            borderRadius : '100px'

          }}>

          </div>
    </div>
  )
}

