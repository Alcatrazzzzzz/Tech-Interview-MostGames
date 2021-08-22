import React from "react";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { getVowelsAmount, getWordsAmount } from "../utils/parserFuncs";

interface ContentTableProps {}

export const ContentTable: React.FC<ContentTableProps> = () => {
  const { data, error, loading } = useTypeSelector((state) => state.parser);

  if (error) {
    return <div>{error}</div>;
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  if (data?.length === 0) {
    return <div>Enter valid id(s)</div>;
  }
  if (data) {
    return (
      <table>
        <tbody>
          <tr className="table-head">
            <td>Текст</td>
            <td>Количество слов</td>
            <td>Колиество гласных</td>
          </tr>
          {data.map((str, index) => {
            return (
              <tr key={index}>
                <td>{str}</td>
                <td>{getWordsAmount(str)}</td>
                <td>{getVowelsAmount(str)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }

  return null;
};
