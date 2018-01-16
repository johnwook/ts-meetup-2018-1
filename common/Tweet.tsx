import { Card, Icon } from "antd";

interface IProps {
  author: string;
  content: string;
}

const Tweet = (props: IProps) => (
  <Card
    actions={[
      <Icon key="retweet" type="retweet" />,
      <Icon key="delete" type="delete" />
    ]}
    title={props.author}
    style={{ width: 400 }}
  >
    <p>{props.content}</p>
  </Card>
);

export default Tweet;
