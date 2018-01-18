import { Card, Icon } from "antd";

interface IProps {
  author: string;
  content: string;
  id: string;
}

const Tweet = (props: IProps) => (
  <Card
    actions={[
      <Icon key="retweet" type="retweet" />,
      <Icon key="delete" type="delete" />
    ]}
    style={{ width: 400 }}
    title={props.author}
  >
    <p>{props.content}</p>
  </Card>
);

export default Tweet;
