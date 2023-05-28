export default function Footer() {

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDayOfWeek = daysOfWeek[new Date().getDay()];
  
  return (
    <footer>
      <div className="container">   
          <p className="mb-0">&copy; 2023 Tu Tran. All rights reserved.</p> 
          <p> Enjoy your {currentDayOfWeek}.</p> 
      </div>
    </footer>
  );
}

