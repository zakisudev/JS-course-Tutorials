const Timeline = ({ events }) => {
  return (
    <ul>
      {events.map((event, index) => (
        <li key={index}>
          <p>{event.date}</p>
          <p>{event.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default Timeline;
