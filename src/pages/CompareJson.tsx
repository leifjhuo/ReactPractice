import React, { useState } from 'react';

const CompareJson: React.FunctionComponent = () => {
  const [json1, setJson1] = useState<string>('');
  const [json2, setJson2] = useState<string>('');
  const [missingKeys1, setMissingKeys1] = useState<string[]>([]);
  const [missingKeys2, setMissingKeys2] = useState<string[]>([]);

  const handleJson1Change = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJson1(e.target.value);
  };

  const handleJson2Change = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJson2(e.target.value);
  };

  const compareJson = () => {
    try {
      const o1 = JSON.parse(json1);
      const o2 = JSON.parse(json2);

      const keys1 = Object.keys(o1);
      const keys2 = Object.keys(o2);

      const compareKeys1 = keys2.filter(key => !keys1.includes(key));
      const compareKeys2 = keys1.filter(key => !keys2.includes(key));

      setMissingKeys1(compareKeys1);
      setMissingKeys2(compareKeys2);
    } catch (error) {
      // alert(error);
      console.error(error);
    }
  };

  return (
    <div>
      <div>
        <label>JSON 1</label><p />
        <textarea value={json1} onChange={handleJson1Change} rows={5}/>
        <p />
        <label>JSON 2</label><p />
        <textarea value={json2} onChange={handleJson2Change} rows={5} />
        <p />
        <button onClick={compareJson}>Click to compare</button>
      </div>

      <div>
        <label>missing keys in JSON 1:</label>
        <ul>{missingKeys1.map(jsonKey => <li key={jsonKey}>{jsonKey}</li>)}</ul>
        <label>missing keys in JSON 2:</label>
        <ul>{missingKeys2.map(jsonKey => <li key={jsonKey}>{jsonKey}</li>)}</ul>
      </div>
    </div>
  );
}

export default CompareJson;
