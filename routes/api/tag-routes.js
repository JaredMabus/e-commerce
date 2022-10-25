const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    let data = await Tag.findAll({
      include: [{ model: Product }]
    });

    res.status(200).json(data);

  } catch (err) {
    res.status(500).json(err.message)
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    let data = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }]
    });

    res.status(200).json(data);

  } catch (err) {
    res.status(500).json(err.message)
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    let data = await Tag.create(req.body);

    res.status(200).json(data);

  } catch (err) {
    res.status(500).json(err.message)
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    let data = await Tag.update(req.body,
      { where: { id: req.params.id } }
    );

    res.status(200).json(data);

  } catch (err) {
    res.status(500).json(err.message)
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    let data = await Tag.destroy({ where: { id: req.params.id } });

    res.status(200).json(data);

  } catch (err) {
    res.status(500).json(err.message)
  }
});

module.exports = router;
