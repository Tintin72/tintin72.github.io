import React from "react";
import { History as HistoryInterface } from "../../interfaces/history";
import { Ps1 } from "../ps1";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

interface Props {
  history: Array<HistoryInterface>;
}

export const History: React.FC<Props> = ({ history }) => {
  return (
    <>
      {history.map((entry: HistoryInterface, index: number) => (
        <div key={entry.command + index}>
          <div className="flex flex-row space-x-2">
            <div className="flex-shrink">
              <Ps1 />
            </div>

            <div className="flex-grow">{entry.command}</div>
          </div>

          {entry.command == "about" || entry.command == "banner" ? (
            <ReactMarkdown
              className="whitespace-pre-wrap mb-2"
              remarkPlugins={[gfm]}
              linkTarget="_blank"
            >
              {entry.output}
            </ReactMarkdown>
          ) : (
            <p
              className="whitespace-pre-wrap mb-2"
              style={{ lineHeight: "normal" }}
              dangerouslySetInnerHTML={{ __html: entry.output }}
            />
          )}
        </div>
      ))}
    </>
  );
};

export default History;
