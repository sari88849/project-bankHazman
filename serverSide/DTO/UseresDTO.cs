using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;

namespace DTO
{
    public class UseresDTO
    {
        public int CodeUser { get; set; }
        public string FName { get; set; }
        public string LName { get; set; }
        public string Password { get; set; }
        public string DateOfBirth { get; set; }
        public string Mail { get; set; }
        public string Phone { get; set; }
        public Nullable<int> CodeSector { get; set; }
        public Nullable<int> Min { get; set; }
        public Nullable<int> AgeMin { get; set; }
        public Nullable<int> AgeMax { get; set; }
        public Nullable<double> AddressX { get; set; }
        public Nullable<double> AddressY { get; set; }
        public Nullable<int> MinToLearn { get; set; }      
        public List<RecommendationDTO> listRecommendation { get; set; }
        public static UseresDTO ToUseresDTO(Useres c)
        {
            UseresDTO c1 = new UseresDTO();
            c1.CodeUser = c.CodeUser;
            c1.FName = c.FName;
            c1.LName = c.LName;
            c1.Password = c.Password;
            //c1.DateOfBirth = c.DateOfBirth;
            c1.Mail = c.Mail;
            c1.Phone = c.Phone;
            c1.CodeSector = c.CodeSector;
            c1.Min = c.Min;
            c1.AgeMin = c.AgeMin;
            c1.AgeMax = c.AgeMax;
            c1.AddressX = c.AddressX;
            c1.AddressY = c.AddressY;
            c1.MinToLearn = c.MinToLearn;

        //       public Nullable<int> CodeSector { get; set; }
        //public Nullable<int> Min { get; set; }
        //public Nullable<int> AgeMin { get; set; }
        //public Nullable<int> AgeMax { get; set; }
        //public Nullable<int> AddressX { get; set; }
        //public Nullable<int> AddressY { get; set; }
        //public Nullable<int> MinToLearn { get; set; }
            return c1;

        }
        //DALמחזיר
        public static Useres ToUseres(UseresDTO c)
        {
            Useres c1 = new Useres();
            c1.CodeUser = Convert.ToInt32(c.CodeUser);
            c1.FName = c.FName;
            c1.LName = c.LName;
            c1.Password = c.Password;
            //c1.DateOfBirth = c.DateOfBirth;
            c1.Mail = c.Mail;
            c1.Phone = c.Phone;
            c1.CodeSector = c.CodeSector;
            c1.Min = c.Min;
            c1.AgeMin = c.AgeMin;
            c1.AgeMax = c.AgeMax;
            c1.AddressX = c.AddressX;
            c1.AddressY = c.AddressY;
            c1.MinToLearn = c.MinToLearn;
            return c1;

        }
        public static List<Useres> ToListUseres(List<UseresDTO> listc)
        {
            List<Useres> lc = new List<Useres>();
            foreach (var item in listc)
            {
                lc.Add(ToUseres(item));
            }
            return lc;
        }
        public static List<UseresDTO> ToListUseresDTO(List<Useres> listc)
        {
            List<UseresDTO> lc = new List<UseresDTO>();
            foreach (var item in listc)
            {
                lc.Add(ToUseresDTO(item));
            }
            return lc;
        }
    }
}
