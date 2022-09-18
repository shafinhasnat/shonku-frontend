import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { all_projects } from "../api/api";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
const Projects = (props) => {
  const [projects, setProjects] = useState([]);
  const [selected, setSelected] = useState();
  useEffect(() => {
    all_projects()
      .then((res) => setProjects(res.data.projects))
      .catch();
  }, []);
  return (
    <div style={{ padding: "1rem" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: "bold" }}></TableCell>
            <TableCell style={{ fontWeight: "bold" }}>app name</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>codebase</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>build</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>state</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>url</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {projects.map((item) => (
            <TableRow>
              <TableCell
                onClick={() => {
                  setSelected(item._id);
                  props.selected(item);
                }}
              >
                {item._id === selected ? (
                  <RadioButtonCheckedIcon />
                ) : (
                  <RadioButtonUncheckedIcon />
                )}
              </TableCell>
              <TableCell>{item.app_name}</TableCell>
              <TableCell>
                {item.codebase ? (
                  <div style={{ color: "green", fontWeight: "bold" }}>
                    Uploaded
                  </div>
                ) : (
                  <div style={{ color: "red", fontWeight: "bold" }}>
                    Not Uploaded
                  </div>
                )}
              </TableCell>
              <TableCell>
                {item.build && item.dockerfile ? (
                  <div style={{ color: "green", fontWeight: "bold" }}>Done</div>
                ) : (
                  <div style={{ color: "red", fontWeight: "bold" }}>
                    Pending
                  </div>
                )}
              </TableCell>
              <TableCell>
                {item.up ? (
                  <div style={{ color: "green", fontWeight: "bold" }}>Up</div>
                ) : (
                  <div style={{ color: "red", fontWeight: "bold" }}>Down</div>
                )}
              </TableCell>
              <TableCell>
                {item.url ? (
                  <a href={item.url} target="_blank">
                    <div style={{ color: "blue", fontWeight: "bold" }}>
                      OPEN
                    </div>
                  </a>
                ) : (
                  <div style={{ color: "red", fontWeight: "bold" }}>
                    not available
                  </div>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
export default Projects;
