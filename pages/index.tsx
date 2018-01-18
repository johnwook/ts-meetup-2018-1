import { Component } from "react";

import DefaultHead from "../common/DefaultHead";
import Tweet from "../common/Tweet";

interface ITweetData {
  author: string;
  content: string;
  id: string;
  retweetedAt?: number;
}

interface IStates {
  tweets: ITweetData[];
}

class Index extends Component<undefined, IStates> {
  constructor(props: any) {
    super(props);

    this.state = {
      tweets: [
        {
          author: "@johnwook",
          content:
            "We're higing 지구에서 처음 구매자와 판매자 사이에 거래가 생긴 날 이래, 사람이 사람에게 물건을 산다는 사실은 바뀌지 않았습니다. 바뀌지 않는 사실위에 기술이라는 날개를 다는 것이 우리가 하는 일입니다. Huiseoul WeWantYou.md",
          id: "0b1f8346-f8f9-4328-8e91-8787dff492bf",
          retweetedAt: 1516116609879
        },
        {
          author: "@typescriptkoreameetup",
          content:
            "안녕하세요, TypeScript Korea 운영진입니다. 많은 개발자 분들의 TypeScript에 대한 관심을 등에 업고 TypeScript Korea에서 Meetup을 준비했습니다. 본 행사는 TypeScript Korea 운영진들이 자발적으로 진행하는 비영리 행사입니다.",
          id: "fd4a76b2-ec44-4411-903a-93be1b4f92e9"
        }
      ]
    };
  }

  public render() {
    return (
      <div>
        <DefaultHead />
        {this.state.tweets.map(tweetObj => (
          <Tweet
            author={tweetObj.author}
            content={tweetObj.content}
            id={tweetObj.id}
            key={tweetObj.id}
          />
        ))}
      </div>
    );
  }
}

export default Index;
