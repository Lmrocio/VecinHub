// Comprueba la conexión con MongoDB Atlas: crea un usuario y una comunidad de prueba,
// los vuelve a leer y los borra. Uso: npm run db:check
import { env } from '../src/config/env.js';
import { connectDB, disconnectDB } from '../src/config/db.js';
import { User, ROLES, MEMBERSHIP_STATUS } from '../src/models/User.js';
import { Community } from '../src/models/Community.js';

const email = `db-check-${Date.now()}@vecinhub.test`;

try {
  await connectDB(env.MONGODB_URI);
  await Promise.all([User.init(), Community.init()]); // asegura los índices

  const user = await User.create({
    name: 'Prueba de conexión',
    email,
    passwordHash: 'no-es-un-hash-real',
    role: ROLES.PRESIDENT,
  });

  const community = await Community.create({
    name: 'Comunidad de prueba',
    address: 'Calle Ficticia 1',
    presidentId: user._id,
  });

  user.communityId = community._id;
  user.membershipStatus = MEMBERSHIP_STATUS.VALIDATED;
  await user.save();

  const found = await User.findById(user._id).populate('communityId', 'name');
  console.log('Usuario creado y leído:', found.toJSON());

  await Promise.all([
    User.deleteOne({ _id: user._id }),
    Community.deleteOne({ _id: community._id }),
  ]);
  console.log('Documentos de prueba eliminados. Conexión correcta ✔');
} catch (err) {
  console.error('Fallo en la comprobación:', err.message);
  process.exitCode = 1;
} finally {
  await disconnectDB();
}
