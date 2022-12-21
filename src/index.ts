import React from "react";

import useInterval from "./useInterval";

const getStringPosition = (string: string, subString: string, index: number): number => {
  return string.split(subString, index).join(" ").length;
};

const getCurrentNodeOverflow = (arr, pos) => {
  let acc = 0;
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (acc + arr[i] > pos) {
      break;
    }

    index++;

    acc = acc + arr[i];
  }

  return [index, pos - acc];
};

const ConsoleWriter = React.memo(({ children, delay = 25, onEnd = () => {} }) => {
  const [pos, setPos] = React.useState(0);

  const tokenLengths = React.useMemo(() => {
    const arr: number[] = [];

    const traverseNodesAndCountTokens = reactNode => {
      const nodeChildren = reactNode?.props?.children;

      if (Array.isArray(reactNode)) {
        reactNode.forEach(node => {
          if (typeof node === "object") {
            traverseNodesAndCountTokens(node);
          } else if (typeof node === "string") {
            // https://stackoverflow.com/questions/881085/count-the-number-of-occurrences-of-a-character-in-a-string-in-javascript
            arr.push(node.split(" ").length);
          }
        });
      }

      if (nodeChildren === undefined) {
        if (typeof reactNode === "string") {
          arr.push(reactNode.split(" ").length);
        }
      }

      // TODO mb try checking if it's a react element
      if (typeof nodeChildren === "object") {
        traverseNodesAndCountTokens(nodeChildren);
      }
      if (typeof nodeChildren === "string") {
        arr.push(nodeChildren.split(" ").length);
      }

      return arr;
    };

    return traverseNodesAndCountTokens(children);
  }, [children]);

  const totalTokens = React.useMemo(
    () => tokenLengths.reduce((acc, curr) => acc + curr, 0),
    [tokenLengths],
  );

  const nodex = React.useMemo(() => {
    let tmpCurrentLoopTokenPos = 0;
    let tmpCurrentLoopNodePos = 0;

    // inspired by https://impedans.me/web/searching-the-inner-text-content-of-nested-react-nodes/
    const traverseNodesAndInjectConsoleWriter = reactNode => {
      if (tmpCurrentLoopTokenPos > pos) {
        return null;
      }

      const nodeChildren = reactNode?.props?.children;

      if (Array.isArray(reactNode)) {
        const joinedNodes = [];
        reactNode.forEach(node => {
          if (typeof node === "object") {
            joinedNodes.push(traverseNodesAndInjectConsoleWriter(node));
          } else if (typeof node === "string") {
            tmpCurrentLoopTokenPos += node.split(" ").length;
            tmpCurrentLoopNodePos++;
            const [nodeIndex, currentNodePos] = getCurrentNodeOverflow(tokenLengths, pos);

            if (nodeIndex < tmpCurrentLoopNodePos) {
              joinedNodes.push(node.slice(0, getStringPosition(node, " ", currentNodePos)));
            }

            joinedNodes.push(node);
          }
        });

        return joinedNodes;
      }

      if (nodeChildren === undefined) {
        if (typeof reactNode === "string") {
          tmpCurrentLoopTokenPos += reactNode.split(" ").length;
          tmpCurrentLoopNodePos++;

          const [nodeIndex, currentNodePos] = getCurrentNodeOverflow(tokenLengths, pos);

          if (nodeIndex < tmpCurrentLoopNodePos) {
            return reactNode.slice(0, getSrringPosition(reactNode, " ", currentNodePos));
          }

          return reactNode;
        }
      }

      // TODO mb try checking if it's a react element
      if (typeof nodeChildren === "object") {
        return React.createElement(
          reactNode.type,
          reactNode?.props,
          traverseNodesAndInjectConsoleWriter(nodeChildren),
        );
      }

      if (typeof nodeChildren === "string") {
        tmpCurrentLoopTokenPos += nodeChildren.split(" ").length;
        tmpCurrentLoopNodePos++;
        const [nodeIndex, currentNodePos] = getCurrentNodeOverflow(tokenLengths, pos);

        if (nodeIndex < tmpCurrentLoopNodePos) {
          return React.createElement(
            reactNode.type,
            reactNode?.props,
            nodeChildren.slice(0, getStringPosition(nodeChildren, " ", currentNodePos)),
          );
        }

        return reactNode;
      }
    };

    return traverseNodesAndInjectConsoleWriter(children);
  }, [children, pos, tokenLengths]);

  useInterval(
    () => {
      setPos(prevPos => {
        if (prevPos + 1 >= totalTokens) {
          onEnd();
        }

        return prevPos + 1;
      });
    },
    totalTokens > pos ? delay : null,
  );

  // reset
  React.useEffect(() => {
    console.log("hmmm");
    setPos(0);
  }, [children]);

  // React.useEffect(() => {
  //   if (play) {
  //     setPos(0);
  //   }
  // }, [play]);

  return nodex;
});

ConsoleWriter.displayName = "ConsoleWriter";

export default ConsoleWriter;