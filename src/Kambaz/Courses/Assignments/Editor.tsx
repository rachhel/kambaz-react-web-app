export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
           <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description">
        The assignment is available online. Submit a link to the landing page of your Web
        application running on Netlify. The landing page should include the following:
        Your full name and section, links to each of the lab assignments, links to the Kanbas application,
        links to all relevant source code repositories. The Kanbas application should include a link to
        navigate back to the landing page.
      </textarea>
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
          <select id="wd-group">
            <option value="wd-text-entry">ASSIGNMENTS</option>
          </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as </label>
          </td>
          <td>
          <select id="wd-display-grade-as">
            <option value="wd-text-entry">Percentage</option>
          </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
          <select id="wd-submission-type">
            <option value="wd-text-entry">Online</option>
            
          </select>
          <br></br><label>Online Entry Options</label><br/>

          <input type="checkbox" name="check-genre" id="wd-text-entry"/>
          <label htmlFor="wd-text-entry">Text Entry</label><br/>

          <input type="checkbox" name="check-genre" id="wd-website-url"/>
          <label htmlFor="wd-website-url">Website URL</label><br/>

          <input type="checkbox" name="check-genre" id="wd-media-recordings"/>
          <label htmlFor="wd-media-recordings">Media Recordings</label><br/>

          <input type="checkbox" name="check-genre" id="wd-student-annotation"/>
          <label htmlFor="wd-student-annotation">Student Annotation</label><br/>

          <input type="checkbox" name="check-genre" id="wd-file-upload"/>
          <label htmlFor="wd-file-upload">File Uploads</label><br/>

          </td>
        </tr>
        </table>
       
        <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign to</label>
            </td>
            <td>
              <input id="wd-assign-to" value="Everyone" />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-due-date">Due</label>
            </td>
            <td>
              <input id="wd-due-date" type="date" value="2025-05-13" />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-from">Available from</label>
            </td>
            <td>
              <input id="wd-available-from" type="date" value="2025-05-06" />
            </td>
          </tr>

      <button id="wd-cancel">Cancel</button>
      <button id="wd-save">Save</button>

      
    </div>

  );
  }
  
  