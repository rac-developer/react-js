interface InputControlProps {
    label?: string;
    placeholder: string;
    name: string;
    type?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputControl: React.FC<InputControlProps> = ({ label, placeholder, name, type = "text", onChange }) => {
    return (
        <div className="my-4 text-left">
            {label && <label className="text-night">{label}</label>}
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                onChange={onChange}
                className="w-full p-2 border border-gray-300 rounded text-gray-700"
            />
        </div>
    );
};

export default InputControl;