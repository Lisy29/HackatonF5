import React from 'react';
import jsmith from '../assets/profile/jsmith.webp';
import aitor from '../assets/profile/aitor.webp';
import lisy from '../assets/profile/lisy.webp';
import olengua from '../assets/profile/olengua.webp';
import yedpt from '../assets/profile/yedpt.webp';
import freddy from '../assets/profile/freddy.webp';
import sherley from '../assets/profile/sherley.webp';
import anais from '../assets/profile/anais.webp';

const teamMembers = [
  { name: 'Omar Lengua', role: 'MADODC', imageUrl: olengua },
  { name: 'Jhon Grisales', role: 'MADODC', imageUrl: jsmith },
  { name: 'Yeder Pimentel', role: 'MADODC', imageUrl: yedpt },
  { name: 'Lisy Velasco', role: 'MADIA', imageUrl: lisy },
  { name: 'Aitor Pérez', role: 'MADIA', imageUrl: aitor },
  { name: 'Freddy Materano', role: 'MADIA', imageUrl: freddy },
  { name: 'Sherley Pardo', role: 'MADCLOUDFEM', imageUrl: sherley },
  { name: 'Anais Reyes', role: 'MADCLOUDFEM', imageUrl: anais },
];

const Card = ({ name, role, imageUrl }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
    <img className="w-full h-48 object-cover" src={imageUrl} alt={`${name} profile`} />
    <div className="px-6 py-4">
      <div className="font-bold text-center text-xl mb-4">{name}</div>
      <p className="text-gray-700 text-center text-base">{role}</p>
    </div>
  </div>
);

const AboutUs = () => (
  <div className="flex flex-wrap justify-center mb-28">
    {teamMembers.map((member, index) => (
      <Card key={index} name={member.name} role={member.role} imageUrl={member.imageUrl} />
    ))}
  </div>
);

export default AboutUs;
