import { prisma } from './../src/lib/prisma';
async function seed() {
    await prisma.event.create({
        data: {
            id: 'e5f9c733-a157-471d-b0e4-2ab95d035f7f',
            title: 'My first event',
            slug: 'my-first-event',
            details: 'This is my first event!',
            maximumAttendees: 120,
        }
    })
}

seed().then(() => {
    console.log('Database seeded!')
    prisma.$disconnect()
})