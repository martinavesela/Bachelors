import React from "react";
import {Card} from "react-bootstrap";

type Props = {
  type?: CardType;
  header?: string;
  title?: string;
  text?: string | React.ReactElement;
}

export enum CardType {
  blue,
  orange
}

const typeToStyle: Record<CardType, string> = {
  [CardType.blue]: "card-blue",
  [CardType.orange]: "card-orange"
}

export const CardComponent: React.FC<Props> = ({type = CardType.blue, header, title, text}) => {
  return (
    <Card className={`card-generic ${typeToStyle[type]}`}>
      {!!header && (
        <Card.Header className="new-line">{header}</Card.Header>
      )}
      <Card.Body>
        {!!title && (
          <Card.Title className="new-line">{title}</Card.Title>
        )}
        {!!text &&
        typeof text === "string"
          ? (
            <Card.Text className="new-line">{text}</Card.Text>
          ) : (
            text
          )
        }
      </Card.Body>
    </Card>
  );
}