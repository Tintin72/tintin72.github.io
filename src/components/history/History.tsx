import React from 'react';
import { History as HistoryInterface } from '../../interfaces/history';
import { Ps1 } from '../ps1';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

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

          <ReactMarkdown
            className="whitespace-pre-wrap mb-2"
            remarkPlugins={[gfm]}
            // style={{ lineHeight: 'normal' }
            // dangerouslySetInnerHTML={}
          >
            {entry.output}
          </ReactMarkdown>
        </div>
      ))}
    </>
  );
};

export default History;
