const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction
} = require('../../controllers/thoughtsController.js');


router.route('/').get(getThoughts).post(createThought);


router.route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

router.route("/:thoughtId/reactions")
.get(getSingleThought)
.post(createReaction)

router.route("/:thoughtId/reactions/:/reactionsId")
.delete(deleteReaction)


module.exports = router;