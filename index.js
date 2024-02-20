const pg = require('pg')
const express = require('express')
const client = new pg.Client(process.env.DATABASE_URL || 'postgress://localhost/the_acme_notes_db')
const app = express()

const init = async () => {
    await client.connect();
    console.log('connected to database');
    let SQL = ``;
    await client.query(SQL);
    console.log('tables created');
    SQL = ` `;
    await client.query(SQL);
    console.log('data seeded');
  };

  init();


  DROP TABLE IF EXISTS notes;
  CREATE TBALE notes(
    id SERIAL PRIMARY KeyboardEvent,
    created_at TIMESTAMP DEFAULT now(),
    updated_at TIMESTAMP DEFAULT now(),
    ranking INTEGER DEFAULT 3 NOT NULL, 
    txt VARCHAR(255) NOT NULL
  );

  INSERT INTO notes(txt, ranking) VALUES(`learn express`, 5);
  INSERT INTO notes(txt, ranking) VALUES(`write SQL queries`, 4);
  INSERT INTO notes(txt, ranking) VALUES(`create routes`, 2);
  
