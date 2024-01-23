import React from 'react';
import Link from 'next/link';

export default function TeamMemberCard({id, slug, jobTitle, name, initials}) {
  return (
    <div className="team__section__item">
    <Link href={`/team/${id}`}>
        <a className="card">
            <span className="team__section__item__image-placeholder">{initials}</span>
            <span className="heading--medium">{name}</span>
            <span className="card__content">{jobTitle}</span>
        </a>
    </Link>
</div>
  )
}
