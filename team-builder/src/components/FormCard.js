import React from "react";

export default function FormCard({ member }) {
  return (
      <div>
          <h2>{member.name}</h2>
          <h4>{member.email}</h4>
          <h4>{member.role}</h4>
    </div>
  );
}