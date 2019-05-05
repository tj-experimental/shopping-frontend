import *  as React from 'react';

interface IProps {
    countBy?: number;
}

interface IState {
    count: number;
}

class Description extends React.Component<IProps, IState> {
    public static defaultProps: Partial<IProps> = {
        countBy: 1,
    };
    public state: IState = {
        count: 0,
    };

    public increase = () => {
        const countBy: number = this.props.countBy!;
        const count: number = this.state.count + countBy;
        this.setState({ count });
    };

    public render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div>
                <p>My favourite number is {this.state.count}</p>
                <button onClick={this.increase}>Increase</button>
            </div>
        );
    }
}

export default Description;

