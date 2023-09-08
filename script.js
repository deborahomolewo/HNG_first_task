function formatDateToCustomString(date) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
  
    const dayOfWeek = daysOfWeek[date.getDay()];
    const dayOfMonth = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
  
    // Function to add ordinal suffix to the day of the month (e.g., 1st, 2nd, 3rd, 4th)
    function getDayWithOrdinalSuffix(day) {
      if (day >= 11 && day <= 13) {
        return day + 'th';
      }
      switch (day % 10) {
        case 1: return day + 'st';
        case 2: return day + 'nd';
        case 3: return day + 'rd';
        default: return day + 'th';
      }
    }
  
    const dayWithOrdinalSuffix = getDayWithOrdinalSuffix(dayOfMonth);
  
    return `${dayOfWeek}`;
  }
  
const date = new Date(); // desired date
const formattedDate = formatDateToCustomString(date);
document.getElementById("day").innerHTML = `Today is ${formattedDate}`;

const clock = () => {
    const date = new Date();
    const timeEl = document.getElementById('time');
    let time = date.toLocaleTimeString( { fractionalSecondDigits: 4 })
    timeEl.textContent = `The time is ${time}`;
}
clock()
setInterval(clock, 1000)