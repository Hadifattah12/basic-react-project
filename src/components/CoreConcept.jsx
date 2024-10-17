
export default function CoreConcept({image,title,description}){
    return (
      <li>
        <img src={image} alt="prop.title" />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    );
  }