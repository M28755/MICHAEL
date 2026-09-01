const CodeWindow = () => {

    const skills = ['HTML', 'CSS', 'Tailwind CSS', 'JavaScript'];
  return (
   <div className="code-window">
      {/* Window Header / Title Bar */}
      <div className="window-header">
        <div className="window-controls">
          <span className="control close" />
          <span className="control minimize" />
          <span className="control maximize" />
        </div>
        <span className="window-title">Developer.tsx</span>
      </div>

      {/* Code Area */}
      <div className="window-body">
        <pre>
          <code>
            <span className="kwd">import</span> {'{ '}
            <span className="type">React</span>
            {' }'} <span className="kwd">from</span> <span className="str">'react'</span>;
            {'\n\n'}
            <span className="kwd">const</span> <span className="func">FrontendDeveloper</span> = () =&gt; {'{\n'}
            {'  '}<span className="kwd">const</span> <span className="var">skills</span> = [\n
            {skills.map((skill) => `    '${skill}',\n`).join('')}
            {'  '}];\n\n
            {'  '}<span className="kwd">return</span> &lt;<span className="component">AwesomeUI</span> /&gt;;\n
            {'}'};<span className="cursor" />
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CodeWindow;