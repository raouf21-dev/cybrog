import './Buttons.css';

const PrimaryButton = (props) => {
    return (
      <button>
        <a href="/#">{props.children}</a>
      </button>
    )
}

const SecondaryButton = (props) => {
    return (
      <button>
        <a href="/#">{props.children}</a>
      </button>
    )
}

export default PrimaryButton;
export {SecondaryButton};