using CoffeeShop.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoffeeShop.Repositories
{
    public interface ICoffeeRepository
    {
        public List<Coffee> GetAll();
        public Coffee Get(int id);
        public void Add(Coffee coffee);
        public void Update(Coffee coffee);
        public void Delete(int id);
    }
}
