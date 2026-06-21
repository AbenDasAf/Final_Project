Start Date: The 15th of June, 2026.

End of Work: The 21st of June, 2026.



Workers: Netanel Gitman(212664056) & Asaf Ben David(325655553)



The Subject: A Music Store where the User can pick out an Album to buy based on:
Album Name(For example: "Vulgar Display of Power" by Pantera)
Song Name(For example: "Armata Strigoi" by Powerwolf is in the Album "Blessed and Possessed")
Track Number(For example: 10 Tracks in "Heroes" by Sabaton)


Step I: Run npm install to get the node_modules file.

Step II: run npm run dev to start the server.

Step III: in Postman, send http://localhost:3000/api/login as a GET request to Login & get a Token.

Step IV: in Postman, copy the Token you just received into Authorization => Auth Type: Bearer Token.

Step V: after that, send http://localhost:3000/api/albums/ and either 2144 for "Preachers of the Night" by Powerwolf, 8891 for "NIghtfall in Middle-Earth" by Blind Guardian or 3402 for "The Infamous..." by Mobb Deep or 4412 for "Vulgar Display of Power" by Pantera.
