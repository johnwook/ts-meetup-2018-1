import { Card, Icon } from "antd";
import { distanceInWordsToNow } from "date-fns";
import { Component } from "react";

import DefaultHead from "../common/DefaultHead";

interface IStates {
  tweets: any[];
}

class Index extends Component<undefined, IStates> {
  constructor(props: any) {
    super(props);

    this.state = {
      tweets: [
        {
          author: "@johnwook",
          content:
            "We're higing 지구에서 처음 구매자와 판매자 사이에 거래가 생긴 날 이래, 사람이 사람에게 물건을 산다는 사실은 바뀌지 않았습니다. 바뀌지 않는 사실위에 기술이라는 날개를 다는 것이 우리가 하는 일입니다.",
          retweetedAt: 1516116609879
        },
        {
          author: "@typescriptkoreameetup",
          content:
            "안녕하세요, TypeScript Korea 운영진입니다. 많은 개발자 분들의 TypeScript에 대한 관심을 등에 업고 TypeScript Korea에서 Meetup을 준비했습니다. 본 행사는 TypeScript Korea 운영진들이 자발적으로 진행하는 비영리 행사입니다."
        }
      ]
    };
  }

  public render() {
    return (
      <div>
        <DefaultHead />
        <Card
          actions={[
            <Icon key="retweet" type="retweet" />,
            <Icon key="delete" type="delete" />
          ]}
          title="@johnwook"
          extra={
            <div>
              <Icon type="retweet" /> {distanceInWordsToNow(Date.now())}
            </div>
          }
          style={{ width: 400 }}
        >
          <p>
            We're higing 지구에서 처음 구매자와 판매자 사이에 거래가 생긴 날
            이래, 사람이 사람에게 물건을 산다는 사실은 바뀌지 않았습니다. 바뀌지
            않는 사실위에 기술이라는 날개를 다는 것이 우리가 하는 일입니다.
          </p>
        </Card>
        <Card
          actions={[
            <Icon key="retweet" type="retweet" />,
            <Icon key="delete" type="delete" />
          ]}
          title="@typescriptkorea"
          style={{ width: 400 }}
        >
          <p>
            안녕하세요, TypeScript Korea 운영진입니다. 많은 개발자 분들의
            TypeScript에 대한 관심을 등에 업고 TypeScript Korea에서 Meetup을
            준비했습니다. 본 행사는 TypeScript Korea 운영진들이 자발적으로
            진행하는 비영리 행사입니다.
          </p>
        </Card>
      </div>
    );
  }
}

export default Index;
