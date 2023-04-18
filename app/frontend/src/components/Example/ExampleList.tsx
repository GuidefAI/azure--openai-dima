import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "Ce sunt colicii la copii?",
        value: "Ce sunt colicii la copii?"
    },
    { text: "Categorii de nou-născuţi cu risc", value: "Categorii de nou-născuţi cu risc" },
    { text: "Tratament copil postmatur", value: "Tratament copil postmatur" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
