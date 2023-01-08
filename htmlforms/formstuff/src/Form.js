export default function Form(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const context = props.context ? props.context : {};
    if (props.onSubmit) {
      props.onSubmit({ event, formData, context });
    }
  };

  return <form onSubmit={handleSubmit}>{props.children}</form>;
}
