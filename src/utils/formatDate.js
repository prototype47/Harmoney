const formatDate = (date) => {

    const d = new Date(date);
    let m = `${d.getMonth() + 1}`;
    let day = `${d.getDate()}`;
    const y = d.getFullYear();

    if(m.length < 2) 
    {
        m = `0${m}`;
    }
    if(day.length < 2) 
    {
        day = `0${day}`;
    }

    return [y, m, day].join('-');
}

export default formatDate;